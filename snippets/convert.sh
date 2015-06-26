for file in {*.html,*.js}
do
	/home/dario/Downloads/Pygments-2.0.2/pygmentize -f png -l ${file##*.} -O "font_name=Droid Sans Mono,style=autumn,tabsize=2" -o ${file%.*}.png ${file}
done
