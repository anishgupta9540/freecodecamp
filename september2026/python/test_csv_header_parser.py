from src.csv_header_parser import get_headings

def test_parses_simple_headings():
    assert get_headings("name,age,city") == [
        "name",
        "age",
        "city",
    ]

def test_preserves_spaces_inside_headings():
    assert get_headings("first name,last name,phone") == [
        "first name",
        "last name",
        "phone",
    ]

def test_removes_leading_and_trailing_whitespace():
    assert get_headings("username , email , signup date ") == [
        "username",
        "email",
        "signup date",
    ]