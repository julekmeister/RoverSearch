Aplikacja do wyszukiwania zdjęć zrobionych przez łazkiki marsjańskie.

Aplikacja łączy się z API dostarcznym przez NASA. Używane są dwa endpointy:
1. Manifest misji - zwraca podstawowe informacje o szczegółach misji danego łazika. W szczególności:
nazwę łazika, 
datę londowania na Marsie, 
datę wystartowania z Ziemi,
max sol - maksymalny czas spędzony na Marsie liczony w dobach marsjańskich (dzień lądowania to sol = 0),
datę ostatniego opublikowanego zdjęcia,
całkowitą ilość zdjęć opublikowanych przez misję do dnia obecnego,
rodzaj kamer używanych przez łaziki w danym dniu.
2. Zdjęcia - zwraca linki do zdjęć wykonanych przez dany łazik wraz z następującymi szczegółami:
nazwa kamery,
skrótowa nazwa kamery,
sol - dzień wykonania zdjęcia liczony w dniach marsjańskich,
data - ziemska data wykonania zdjęcia,
ilość zdjęć wykonanych danego dnia.

Używanie

1. Z pierwszego dropdowna należy wybrać konkretny łazik. Ich nazwy są wprogramowane jako opcje obiektu typu select. 
2. Należy kliknąć guzik obok dropdowna. Pierwszy endpoint zostanie wywołany i szczegóły misji zostaną uzupełnione w tabelce poniżej.
3. Z pola wyboru kalendarza należy wybrać datę. Min. i maks. data dostępna w kalendarzu będzie zależna od daty lądowania i daty ostatniego zdjęcia. 
5. Po kliknięciu guzika obok kalendarza zostanie wywowały drugi endpoint, który zwróci szczegóły zdjęć wykonanych w wybranej dacie. Jeśli danego dnia nie ma dostępnych zdjęć, pojawi się komunikat w labelu na górze strony.
6. Szczegóły będą uzupełnione w drugiej tabli, a poniżej niej pojawi się pierwze zdjęcie z danego dnia. Wszystkie zdjęcia z danego dnia ładowane są do obiektu typu array.
7. Poniżej zdjęcia dostępne są guziki, które po kliknięciu będą pokazywać następne zdjęcie z arraya.