def hex_to_decimal(hex_value):
    return int(hex_value, 16)


if __name__ == "__main__":
    print(hex_to_decimal("A"))  # 10
    print(hex_to_decimal("15"))  # 21
    print(hex_to_decimal("2E"))  # 46
    print(hex_to_decimal("FF"))  # 255
    print(hex_to_decimal("A3F"))  # 2623
