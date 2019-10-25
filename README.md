# Languages
* **[English](#what-is-it-eng "English")**
* **[Русский](#шо-ита-ru "Русский")**

------------


# What is it? [ENG]

[↓ To navigation](#Navigation "↓ To navigation") | **[↑ To languages](#languages "↑ To languages")**


**mistFox** — theme, that changes UI of [Firefox](https://www.mozilla.org/en-US/firefox/new/ "Firefox") browser.

*The last time the theme was tested on Firefox version 70.0.*

**Used plugins:**
* **[Webpack](https://webpack.js.org/ "Webpack")**


## Navigation

* **[What is it? [ENG]](#what-is-it-eng "What is it? [ENG]")**
	- **Navigation**
	- **[How to for a user](#how-to-for-a-user "How to for a user")**
		+ **[Installing theme](#installing-theme "Installing theme")**
	- **[To work with source code](#To-work-with-source-code "To work with source code")**
		+ **[Commands](#commands "Commands")**
	- **[End.](#end "End.")**


## How-to for a user

### Installing theme

To *install* the theme, do the following:

1. In the Firefox search bar, enter **`about:config`**
2. In the opened tab, switch the **`toolkit.legacyUserProfileCustomizations.stylesheets`** to **`true`** state
3. In the Firefox search bar, enter **`about:profiles`**
4. In the opened tab, search the current profile and open it's **root directory**
5. In the opened window, create a folder named **`chrome`**
6. Transfer the **[userChrome.css](./prod/userChrome.css "userChrome.css")** file from the **`prod`** folder of this repository to the created folder
7. Restart the Firefox. Done, the theme should apply.

[↑ To navigation](#Navigation "↑ To navigation")

## How-to for working with source code

### Commands
* `npm run start` - Starts the style assembly

[↑ To navigation](#Navigation "↑ To navigation")

## End.


------------


# Шо ита? [RU]

[↓ К навигации](#Навигация "↓ К навигации") | **[↑ To languages](#languages "↑ To languages")**

**mistFox** — тема, изменяющая UI браузера [Firefox](https://www.mozilla.org/ru/firefox/new/ "Firefox").

*Последний раз тема проверялась на Firefox версии 70.0.*

**Используемые плагины:**
* **[Webpack](https://webpack.js.org/ "Webpack")**


## Навигация

* **[Шо ита? [RU]](#шо-ита-ru "Шо ита? [RU]")**
	- **Навигация**
	- **[Инструкция для пользователя](#инструкция-для-пользователя "Инструкция для пользователя")**
		+ **[Установка темы](#установка-темы "Установка темы")**
	+ **[Инструкция для работы с исходным кодом](#инструкция-для-работы-с-исходным кодом "Инструкция для работы с исходным кодом")**
		+ **[Команды](#команды "Команды")**
	- **[Всё.](#всё "End.")**


## Инструкция для пользователя

### Установка темы

Для *установки* темы выполните следующие действия:

1. В поисковой строке в Firefox напишите **`about:config`**
2. В открывшейся вкладке переключите параметр **`toolkit.legacyUserProfileCustomizations.stylesheets`** в состояние **`true`**
3. В поисковой строке в Firefox напишите: **`about:profiles`**
4. В открывшейся вкладке найдите текущий профиль и перейдите в его **корневой каталог**
5. В открывшемся окне проводника создайте папку с названием **`chrome`**
6. В созданную папку перенести файл **[userChrome.css](./prod/userChrome.css "userChrome.css")** из папки **`prod`** этого репозитория
7. Перезапустите Firefox. Готово, тема должна примениться.

[↑ К навигации](#Навигация "↑ К навигации")

## Инструкция для работы с исходным кодом

Не забудьте про `npm install` для установки зависимостей.

### Команды
* `npm run start` - инициация сборки стилей

[↑ К навигации](#Навигация "↑ К навигации")


## Всё.
**-whiteGloom**