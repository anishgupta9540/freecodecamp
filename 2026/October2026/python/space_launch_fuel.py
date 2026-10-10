# Space Week Day 7: Launch Fuel
# https://www.freecodecamp.org/learn/daily-coding-challenge/10-10


def launchFuel(payload):
    total_mass = payload
    fuel = 0

    while True:
        additional_fuel = total_mass / 5 - fuel

        if additional_fuel < 1:
            fuel += additional_fuel
            break

        fuel += additional_fuel
        total_mass = payload + fuel

    return round(fuel, 1)


# Test cases
print(launchFuel(50))  # 12.4
print(launchFuel(500))  # 124.8
print(launchFuel(243))  # 60.7
print(launchFuel(11000))  # 2749.8
print(launchFuel(6214))  # 1553.4
