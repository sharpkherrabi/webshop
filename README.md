

# Webshop Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.1.

## Frontend starten

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Angular CLI
Um das Programm verwenden zu können muss die Angular CLI installiert werden mit:

``npm i -g @angular/cli``

## Produkte einsehen
Alle Produkte werden unter folgenden URL angezeigt:
``http://localhost:4200/products``


## Produkte näher betrachten
Damit man Produkte näher betrachten kann, klickt man auf ein Produkt und auf den Button:
``Produkt näher ansehen``
Folgende URL wird angezeigt:
``http://localhost:4200/productdetail?productId=(id)``

![ ](gifs/detailproduct.gif)

## Produkt in Einkaufswagen legen
Um ein Produkt in den Einkaufswagen zu legen, klickt man auf den Button:
``In den Einkaufswagen``
Anschließend erscheint ein Toast, dass das Produkt dem Warenkorb hinzugefügt wurde und eine Notification Bubble am Warenkorb

![ ](gifs/Addcart.gif)

## Einkaufswagen
Unter folgender URL befinden sich alle Produkte die dem Warenkorb hinzugefügt wurden:
``http://localhost:4200/shoppingcart``

![ ](gifs/shoppingcart.gif)

## Aus dem Warenkorb entfernen
Unter dem Button kann man Produkte aus dem Warenkorb entfernen:
``Aus dem Warenkorb entfernen``

## Checkout
Um auf die Checkout Seite zu gelangen, klickt man auf den Button:
``Zur Kasse gehen``
Anschließend befindet man sich unter dieser URL:
``http://localhost:4200/checkout``

![ ](gifs/checkout.gif)

## Dashboard Seite
Um Produkte hinzuzufügen, bearbeiten, löschen und Bestellungen einzusehen muss man sich auf der Dashboard Seite befinden
Unter folgender URL:
``http://localhost:4200/dashboard``

## Produkt hinzufügen
Produkte kann man unter dem Button hinzufügen:
``Produkte hinzufügen``

![ ](gifs/newproduct.gif)

## Produkt bearbeiten
Produkte bearbeiten kann man bei einem Produkt unter dem Button:
``Bearbeiten``

![](gifs/editproduct.gif)

## Produkt löschen
Produkte löschen kann man bei einem Produkt unter dem Button:
``Löschen``

![](gifs/deleteproduct.gif)

## Bestellungen einsehen
Unter dem Reiter Bestellungen kann man die Bestellhistorie sehen

![](gifs/bestellungen.gif)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
