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
		+ **[Removing theme](#removing-theme "Removing theme")**
	- **[To work with source code](#To-work-with-source-code "To work with source code")**
		+ **[Project initializing](#project-initializing "Project initializing")**
		+ **[Styles editing](#styles-editing "Styles editing")**
		+ **[Simple styles assembly](#simple-styles-assembly "Simple styles assembly")**
		+ **[Auto copy styles](#auto-copy-styles "Auto copy styles")**
		+ **[NPM commands](#npm-commands "NPM commands")**
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

### Removing theme

To **delete** a theme, just clear the **`chrome`** folder in your Firefox profile.

[↑ To navigation](#Navigation "↑ To navigation")


## How-to for working with source code

### Project initializing

To init project, do the following:

1. Do **`npm install`** to install dependencies.
2. Do **`npm run initialize`** to init project.

[↑ To navigation](#Navigation "↑ To navigation")


### Styles editing

Oddly enough, to edit styles, **you will need experience with CSS and the developer tools** of Firefox browser.

The styles that are this theme are on the path **`/src/styles/`**. Do whatever you want with them.

Firefox uses the XML-based **[XUL](https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL "XUL")** language. Its elements also have styles. They are edited by this theme.
To see them, you need:

1. Go to **developer tools. Keyboard shortcut: `ctrl + shift + i`**
2. In the panel that opens, go to **settings. Keyboard Shortcut: `F1`**
3. Find **section `Advanced Settings`**
4. **Enable** option **`Enable browser chrome and add-on debugging toolboxes`**
5. **Enable** the option ** `Enable remote debugging` **
6. Open **remote debugging. Keyboard shortcut: `ctrl + shift + alt + i`**
7. **Accept** incoming connection.
8. Done. The opened remote debugging window is the same developer tools, but **it allows you to edit and view the styles of the Firefox window**.


You can also search the Internet about *userChrome*, there are a lot of interesting things.

[↑ To navigation](#Navigation "↑ To navigation")



### Simple styles assembly

For simple assembly styles just use the command **`npm run build`**.

[↑ To navigation](#Navigation "↑ To navigation")


### Auto copy styles

If you want the collected styles **to be automatically copied to the folder with your Firefox profile**, then you need the command **`npm run stylesAutoApply [path:]`**.

This feature requires **paths to your profiles**. They can be specified:
* **Via the console**, when the function starts
* **Specify in the file `profilePaths.txt`**, located in the root folder of the project

**The first option** is suitable if there is only one profile, assembly will be carried out once, etc.
**You need** to pass the argument **`path`** after the function name, containing the path to the profile.

*Example:*

**`npm run stylesAutoApply -- path:PATHTOPROFILE`**


**The second option** is much more convenient - there can be as many paths as you like, they are conveniently stored in a file, you do not need to enter paths every time, etc.
**You need** in the file **`profilePaths.txt`** below the dashed line, enter the paths to the profiles (*without separators, one path per line*) into which the styles should be copied.

*Example:*

```
---------
Path to your profile
Another one path to your another profile
And another one path to your another profile
```

**After functions start**
The project will start the assembly of styles, and then copy them to the **`chrome`** folder in the profile folder. If there is none, then he will create it.

**Note:**
If the profile already contains the **`userChrome`** file, reserve it as it will be overwritten.

[↑ To navigation](#Navigation "↑ To navigation")


### NPM Commands

* `npm run initialize` - Initialize project
* `npm run build` - Starts the styles assembly
* `npm run stylesAutoApply [path:YOURPATH]` - Starts the assembly of styles, after which it automatically copies them to profiles

*Arguments:*
* **YOURPATH:** - type: string. The path to your Firefox profile. Optional parameter, specified if paths are not specified in the file [profilePaths.txt](#styles-editing "Styles editing"). Example: `npm run stylesAutoApply -- path:yourpath`

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
		+ **[Удаление темы](#удаление-темы "Удаление темы")**
	+ **[Инструкция для работы с исходным кодом](#инструкция-для-работы-с-исходным-кодом "Инструкция для работы с исходным кодом")**
		+ **[Иницализация проекта](#иницализация-проекта "Иницализация проекта")**
		+ **[Редактирование стилей](#редактирование-стилей "Редактирование стилей")**
		+ **[Обычная сборка стилей](#Обычная-сборка-стилей "Обычная сборка стилей")**
		+ **[Авто-копирование стилей](#авто-копирование-стилей "Авто-копирование стилей")**
		+ **[Команды NPM](#команды-npm "Команды NPM")**
	- **[Всё.](#всё "End.")**


## Инструкция для пользователя

### Установка темы

Для **установки** темы выполните следующие действия:

1. В поисковой строке в Firefox напишите **`about:config`**
2. В открывшейся вкладке переключите параметр **`toolkit.legacyUserProfileCustomizations.stylesheets`** в состояние **`true`**
3. В поисковой строке в Firefox напишите: **`about:profiles`**
4. В открывшейся вкладке найдите текущий профиль и перейдите в его **корневой каталог**
5. В открывшемся окне проводника создайте папку с названием **`chrome`**
6. В созданную папку перенести файл **[userChrome.css](./prod/userChrome.css "userChrome.css")** из папки **`prod`** этого репозитория
7. Перезапустите Firefox. Готово, тема должна примениться.

### Удаление темы

Для **удаления** темы достаточно очистить папку **`chrome`** в профиле Firefox.

[↑ К навигации](#Навигация "↑ К навигации")

## Инструкция для работы с исходным кодом

### Иницализация проекта
Список действий для инициализации проекта:
1. Выполните **`npm install`** для установки зависимостей.
2. Выполните **`npm run initialize`**, чтобы инициализировать проект.

[↑ К навигации](#Навигация "↑ К навигации")


### Редактирование стилей

Как ни странно, для редкатирования стилей **вам понадобится опыт работы с CSS и инструментами разработчика** браузера Firefox.

Стили, которые являются этой темой, находятся по пути **`/src/styles/`**. Делайте с ними всё, что захотите.

В Firefox используется основанный на XML язык **[XUL](https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL "XUL")**. У его элементов тоже есть стили. Их и редактирует эта тема.
Что бы их посмотреть, нужно:

1. Перейти в **инструменты разработчика. Клавиатурное сокращение: `ctrl+shift+i`**
2. В открывшейся панели перейти в **настройки. Клавиатурное сокращение: `F1`**
3. Найти раздел **`Дополнительные параметры`**
4. Включить параметр **`Включить инструменты отладки browser chrome и дополнений`**
5. Включить параметр **`Включить удалённую отладку`**
6. Открыть **удалённую отладку. Клавиатурное сокращение: `ctrl+shift+alt+i`**
7. **Принять** входящее подключение.
8. Готово. Открывшееся окно удалённой отладки - те же самые инструменты разработчика, но оно **позволяет редактировать и смотреть стили окна Firefox**.


Ещё можно поискать в интернете про *userChrome*, там много интересного.

[↑ К навигации](#Навигация "↑ К навигации")


### Обычная сборка стилей

Для обычной сборки стилей достаточно воспользоваться командой **`npm run build`**.

[↑ К навигации](#Навигация "↑ К навигации")


### Авто-копирование стилей

Если вы хотите, что бы собранные стили **автоматически копировались в папку с вашим Firefox профилем**, то потребуется команда **`npm run stylesAutoApply [path:]`**.

Для работы функции потребуются **пути к вашим профилям.** Их можно указать:
* **Через консоль**, при запуске функции
* **Указать в файле `profilePaths.txt`**, находящемся в корневой папке проекта

**Первый вариант** подойдёт, если профиль один, сборка проведётся один раз и т.п..
**Вам нужно** после имени функции передать аргумент **`path`**, содержащий путь к профилю.

*Пример:*

**`npm run stylesAutoApply -- path:ПУТЬКПРОФИЛЮ`**


**Второй вариант** гораздо более удобен  — путей может быть сколько угодно, их удобно хранить в файле, пути не нужно каждый раз вводить и т.д..
**Вам нужно** в файле **`profilePaths.txt`** после пунктирной линии вписать пути к профилям (*без разделителей, один путь на одну строку*), в которые должны копироваться стили.

*Пример:*

```
---------
Путь к вашему профилю
Ещё один путь к вашему профилю
И ещё один путь к вашему профилю
```

**После запуска**
Проект запустит сборку стилей, после чего скопирует их в папку **`chrome`** в папке профиля. Если такой нет, то он создаст её.

**Note:**
Если в профиле уже есть файл **`userChrome`**, зарезервируйте его, так как он будет перезаписан.

[↑ К навигации](#Навигация "↑ К навигации")


### Команды NPM

* `npm run initialize` - Инициализирует проект
* `npm run build` - Начинает сборку стилей
* `npm run stylesAutoApply [path:ВАШПУТЬ]` - Начинает сборку стилей, после которой автоматически копирует их в профили.

*Arguments:*
* **ВАШПУТЬ:** - type: string. Путь к вашему Firefox профилю. Необязательный параметр, указывается в случае, если пути не указаны в файле [profilePaths.txt](#редактирование-стилей "Редактирование стилей"). Пример: `npm run stylesAutoApply -- path:вашпуть`

[↑ К навигации](#Навигация "↑ К навигации")


## Всё.
**-whiteGloom**