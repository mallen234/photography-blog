dir="$1"
prefix="$2"

i=1
for file in "$dir"/*; do
  [ -f "$file" ] || continue
  ext="${file##*.}"
  mv "$file" "$dir/${prefix}_$((i++)).$ext"
done