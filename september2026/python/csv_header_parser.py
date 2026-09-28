def get_headings(csv_line):
    return [heading.strip() for heading in csv_line.split(",")]

result = get_headings("name,age,city")
print(result)