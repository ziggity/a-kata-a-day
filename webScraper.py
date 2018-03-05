import requests
from bs4 import BeautifulSoup
page = requests.get('www.github.com')
soup = BeautifulSoup(page.content, 'html.parser')
soup.find_all('div', class_='aria-label')
print(soup.prettify())
