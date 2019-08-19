# Тестовое задание

*	Для работы с данными был использован MobX.
*	Для проверки данных реализован валидатор.
*	Из дополнительного была реализована Локализация и Pull-to-refresh
---
P.S. Для локализации использовал библиотеку I18n. Возможно при сборке проекта на Android возникнет ошибка:
> ERROR: The minSdk version should not be declared in the android manifest I18ne defaultConfig in the build.gradle file. 
> Remove minSdkVersion and sync project Affected Modules: react-native-i18n
для ее решения нужно в манифесте I18n
_\node_modules\react-native-i18n\android\src\main\AndroidManisfest.xml_ удалить строку 
```html
<uses-sdk android:minSdkVersion="16" />
```


