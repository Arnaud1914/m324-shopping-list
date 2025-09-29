Die Pipeline namens "CI Pipeline" besteht aus 3 Jobs
Der erste Job ist der "linting job" damit der Code den Standards entspricht und keine Fehler enthält.
Der zweite Job ist der "testing job" führt Jest Tests durch um sicherzustellen dass die Funktionen bzw Komponenten wie erwartet funktionieren.
Der letzte Job simuliert das Deployment in dem es einfach einen Log ausgibt mit "Deployment successful".
Dieser Job wird aber nur ausgeführt wenn das linting und testing erfolgreich war.

Man könnte die Pipeline verbessern indem man das Checkout des Code, das Setup von Node und das installen aller dependencies in einen seperaten Job damit es nicht 2 mal für das linting und testing ausgeführt werden muss