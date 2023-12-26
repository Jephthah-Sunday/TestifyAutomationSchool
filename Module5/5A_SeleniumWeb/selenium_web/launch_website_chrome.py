
from selenium import webdriver


def main():
    driver = webdriver.Chrome(executable_path="C:/Users/olabsmachine/Web_Drivers/chromedriver/120.0.6099.109/chromedriver-mac-arm64/chromedriver")
    driver.get("http://www.google.com")
    driver.close()


main()