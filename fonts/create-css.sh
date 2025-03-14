#!/usr/bin/bash

# Check Bash version
if (( ${BASH_VERSINFO[0]} < 4)); then
	echo "BASH_VERSINFO[0]=${BASH_VERSINFO[0]}"
	echo "This script requires Bash 4.0 or newer for associative arrays"
		exit 1
fi

# Function to check if the file exists
delete_file() {
    if [ -f "$1" ]; then
        echo "File $1 already exists."
        rm -i $1
    fi
}

delete_file "fontlist.js"
delete_file "fonts.css"
delete_file "fontlist.txt"

# Open file descriptors (fd) for read/write:
# 3 = fontlist.js
# 4 = fonts.css
exec 3<> fontlist.js
exec 4<> fonts.css

# 1. list all fonts:
ls *.ttf *.otf *.woff *.woff2 > fontlist.txt

# 2
printf "var fontList = [\n" >&3

# 3. process fontlist
readarray -t FONTS <fontlist.txt
i=0
while [[ $i -lt ${#FONTS[@]} ]]; do
	FONTNAME="${FONTS[$i]}"
  FONTTYPE="${FONTNAME##*.}"
	case $FONTTYPE in
		ttf)    LONGTYPE="truetype" ;;
		otf)    LONGTYPE="opentype" ;;
		woff)   LONGTYPE="woff" ;;
		woff2)  LONGTYPE="woff2" ;;
	esac
	SHORT1="${FONTNAME%%.*}"
	SHORT2="${SHORT1%%-*}"
#	echo "fontfile: $FONTNAME			fonttype: $FONTTYPE longtype: $LONGTYPE	shortname1: $SHORT1	shortname2: $SHORT2"

	# fonts.css
	printf "@font-face {\n" >&4
	printf "	font-family:${SHORT2};\n" >&4
#	printf "	src: url('./fonts/${FONTNAME}');\n" >&4
#	printf "	src: url('./fonts/${FONTNAME}') format('${LONGTYPE}');\n" >&4

	printf "	src: url('./${FONTNAME}');\n" >&4
	printf "	src: url('./${FONTNAME}') format('${LONGTYPE}');\n" >&4
	printf "}\n" >&4

	# fontlist.js
	printf "	{ name:\"${SHORT2}\", file:'${FONTNAME}'}" >&3

	i=$((i+1))

	if [[ $i -lt ${#FONTS[@]} ]]; then
		printf ",\n" >&3
	fi	
done

printf "];\n" >&3

# Close fd 3 & 4: (3 = fontlist.js and 4 = fonts.css)
exec 3>&-
exec 4>&-

