# this will be our calculator to return the bmi value to the user
def calculate_bmi(weight, height):
    return weight / (height ** 2)

# in this conditional block we set a target range and return to the user some verdict on their bmi
def verdict_bmi(bmi):
    if bmi < 18.5:
        return "Underweight"
    elif 18.5 <= bmi < 24.9:
        return "Healthy"
    else:
        return "Overweight"

def main():
    print("Welcome to the Python BMI calculator! Let's start by getting some information about you..")

    # we need to ask for user input in a format that includes decimals so we use the float data structure
    # the input method prompts for input in the terminal for example like during user interaction
    weight = float(input("Enter your weight in kilograms: "))
    height = float(input("Enter your height in meters: "))

    # retrieve the user's bmi value
    bmi = round(calculate_bmi(weight, height), 2)
    verdict = verdict_bmi(bmi)

    # share the result with the user
    print(f"Your BMI is {bmi}. You are {verdict}.")

# typical in python scripts. only runs main when script is not imported.
if __name__ == "__main__":
    main()
