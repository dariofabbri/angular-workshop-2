cwd=$(pwd)

for file in `find ./*/ \( -iregex ".*\.\(js\|html\|json\|css\)" ! -iname "angular*.js" \)`
do
	pygmentize -f html -l ${file##*.} -O "style=paraiso-dark,linenos=1,full=true,cssfile=$cwd/custom.css,noclobber_cssfile=true,tabsize=2" -o ${file}.html ${file}
	wkhtmltoimage -f png ${file}.html ${file}.png
	rm ${file}.html
	convert ${file}.png ${file}.png
done
