# `james_f43_home`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| HID | varchar(14) | YES |  | NULL |  |  |
| HOUSE_ID | varchar(11) | YES | MUL | NULL |  |  |
| HOUSETYPE | varchar(1) | YES |  | NULL |  |  |
| ROOMNO | varchar(10) | YES |  | NULL |  |  |
| CONDO | varchar(75) | YES |  | NULL |  |  |
| HOUSE | varchar(75) | YES |  | NULL |  |  |
| SOISUB | varchar(255) | YES |  | NULL |  |  |
| SOIMAIN | varchar(255) | YES |  | NULL |  |  |
| ROAD | varchar(255) | YES |  | NULL |  |  |
| VILLANAME | varchar(255) | YES |  | NULL |  |  |
| VILLAGE | varchar(2) | YES |  | NULL |  |  |
| TAMBON | varchar(2) | YES |  | NULL |  |  |
| AMPUR | varchar(2) | YES |  | NULL |  |  |
| CHANGWAT | varchar(2) | YES |  | NULL |  |  |
| TELEPHONE | varchar(10) | YES |  | NULL |  |  |
| LATITUDE | varchar(10) | YES |  | NULL |  |  |
| LONGITUDE | varchar(10) | YES |  | NULL |  |  |
| NFAMILY | varchar(2) | YES |  | NULL |  |  |
| LOCATYPE | varchar(1) | YES |  | NULL |  |  |
| VHVID | varchar(15) | YES |  | NULL |  |  |
| HEADID | varchar(15) | YES |  | NULL |  |  |
| TOILET | varchar(1) | YES |  | NULL |  |  |
| WATER | varchar(1) | YES |  | NULL |  |  |
| WATERTYPE | varchar(1) | YES |  | NULL |  |  |
| GARBAGE | varchar(1) | YES |  | NULL |  |  |
| HOUSING | varchar(1) | YES |  | NULL |  |  |
| DURABILITY | varchar(1) | YES |  | NULL |  |  |
| CLEANLINESS | varchar(1) | YES |  | NULL |  |  |
| VENTILATION | varchar(1) | YES |  | NULL |  |  |
| LIGHT | varchar(1) | YES |  | NULL |  |  |
| WATERTM | varchar(1) | YES |  | NULL |  |  |
| MFOOD | varchar(1) | YES |  | NULL |  |  |
| BCONTROL | varchar(1) | YES |  | NULL |  |  |
| ACONTROL | varchar(1) | YES |  | NULL |  |  |
| CHEMICAL | varchar(1) | YES |  | NULL |  |  |
| OUTDATE | varchar(8) | YES |  | NULL |  |  |
| D_UPDATE | varchar(14) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| HOUSE_ID | HOUSE_ID | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "HOSPCODE": "12251",
    "HID": "21233",
    "HOUSE_ID": "",
    "HOUSETYPE": "0",
    "ROOMNO": "",
    "CONDO": "",
    "HOUSE": "0",
    "SOISUB": "",
    "SOIMAIN": "",
    "ROAD": "",
    "VILLANAME": "",
    "VILLAGE": "01",
    "TAMBON": "09",
    "AMPUR": "01",
    "CHANGWAT": "10",
    "TELEPHONE": "",
    "LATITUDE": "",
    "LONGITUDE": "",
    "NFAMILY": "1",
    "LOCATYPE": "",
    "VHVID": "000000",
    "HEADID": "000000",
    "TOILET": "",
    "WATER": "",
    "WATERTYPE": "",
    "GARBAGE": "",
    "HOUSING": "",
    "DURABILITY": "",
    "CLEANLINESS": "",
    "VENTILATION": "",
    "LIGHT": "",
    "WATERTM": "",
    "MFOOD": "",
    "BCONTROL": "",
    "ACONTROL": "",
    "CHEMICAL": "",
    "OUTDATE": "",
    "D_UPDATE": "20130620183603"
  }
]
```
