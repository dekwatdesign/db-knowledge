# `james_f43_address`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| ADDRESSTYPE | varchar(1) | YES |  | NULL |  |  |
| HOUSE_ID | varchar(11) | YES |  | NULL |  |  |
| HOUSETYPE | varchar(1) | YES |  | NULL |  |  |
| ROOMNO | varchar(10) | YES |  | NULL |  |  |
| CONDO | varchar(75) | YES |  | NULL |  |  |
| HOUSENO | varchar(75) | YES |  | NULL |  |  |
| SOISUB | varchar(255) | YES |  | NULL |  |  |
| SOIMAIN | varchar(255) | YES |  | NULL |  |  |
| ROAD | varchar(255) | YES |  | NULL |  |  |
| VILLANAME | varchar(255) | YES |  | NULL |  |  |
| VILLAGE | varchar(2) | YES |  | NULL |  |  |
| TAMBON | varchar(2) | YES |  | NULL |  |  |
| AMPUR | varchar(2) | YES |  | NULL |  |  |
| CHANGWAT | varchar(2) | YES |  | NULL |  |  |
| TELEPHONE | varchar(10) | YES |  | NULL |  |  |
| MOBILE | varchar(10) | YES |  | NULL |  |  |
| D_UPDATE | varchar(14) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PID | PID | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "HOSPCODE": "12251",
    "PID": "000003",
    "ADDRESSTYPE": "",
    "HOUSE_ID": "1",
    "HOUSETYPE": "9",
    "ROOMNO": "",
    "CONDO": "",
    "HOUSENO": "7/88",
    "SOISUB": "",
    "SOIMAIN": "",
    "ROAD": "",
    "VILLANAME": "",
    "VILLAGE": "02",
    "TAMBON": "16",
    "AMPUR": "01",
    "CHANGWAT": "11",
    "TELEPHONE": "",
    "MOBILE": "",
    "D_UPDATE": "20131011204427"
  },
  {
    "HOSPCODE": "12251",
    "PID": "000004",
    "ADDRESSTYPE": "",
    "HOUSE_ID": "1",
    "HOUSETYPE": "9",
    "ROOMNO": "",
    "CONDO": "",
    "HOUSENO": "20/4,ม.9",
    "SOISUB": "",
    "SOIMAIN": "",
    "ROAD": "",
    "VILLANAME": "",
    "VILLAGE": "00",
    "TAMBON": "02",
    "AMPUR": "01",
    "CHANGWAT": "11",
    "TELEPHONE": "",
    "MOBILE": "",
    "D_UPDATE": "20130304182436"
  },
  {
    "HOSPCODE": "12251",
    "PID": "000004",
    "ADDRESSTYPE": "",
    "HOUSE_ID": "1",
    "HOUSETYPE": "9",
    "ROOMNO": "",
    "CONDO": "",
    "HOUSENO": "20/4,ม.9",
    "SOISUB": "",
    "SOIMAIN": "",
    "ROAD": "",
    "VILLANAME": "",
    "VILLAGE": "00",
    "TAMBON": "02",
    "AMPUR": "01",
    "CHANGWAT": "11",
    "TELEPHONE": "",
    "MOBILE": "",
    "D_UPDATE": "20130304182436"
  },
  {
    "HOSPCODE": "12251",
    "PID": "000005",
    "ADDRESSTYPE": "",
    "HOUSE_ID": "1",
    "HOUSETYPE": "9",
    "ROOMNO": "",
    "CONDO": "",
    "HOUSENO": "19/145,ม.พัฒนาสุข,ซ.9,ถ.เทพารักษ์",
    "SOISUB": "",
    "SOIMAIN": "",
    "ROAD": "",
    "VILLANAME": "",
    "VILLAGE": "00",
    "TAMBON": "03",
    "AMPUR": "01",
    "CHANGWAT": "11",
    "TELEPHONE": "",
    "MOBILE": "",
    "D_UPDATE": "20130304182436"
  },
  {
    "HOSPCODE": "12251",
    "PID": "000006",
    "ADDRESSTYPE": "",
    "HOUSE_ID": "1",
    "HOUSETYPE": "9",
    "ROOMNO": "",
    "CONDO": "",
    "HOUSENO": "872/1",
    "SOISUB": "",
    "SOIMAIN": "",
    "ROAD": "",
    "VILLANAME": "",
    "VILLAGE": "00",
    "TAMBON": "05",
    "AMPUR": "15",
    "CHANGWAT": "10",
    "TELEPHONE": "",
    "MOBILE": "",
    "D_UPDATE": "20130304182436"
  },
  {
    "HOSPCODE": "12251",
    "PID": "000008",
    "ADDRESSTYPE": "",
    "HOUSE_ID": "1",
    "HOUSETYPE": "9",
    "ROOMNO": "",
    "CONDO": "",
    "HOUSENO": "83/196,ม.7",
    "SOISUB": "",
    "SOIMAIN": "",
    "ROAD": "",
    "VILLANAME": "",
    "VILLAGE": "00",
    "TAMBON": "14",
    "AMPUR": "01",
    "CHANGWAT": "11",
    "TELEPHONE": "",
    "MOBILE": "",
    "D_UPDATE": "20130304182436"
  },
  {
    "HOSPCODE": "12251",
    "PID": "000009",
    "ADDRESSTYPE": "",
    "HOUSE_ID": "1",
    "HOUSETYPE": "9",
    "ROOMNO": "",
    "CONDO": "",
    "HOUSENO": "167,ม.5",
    "SOISUB": "",
    "SOIMAIN": "",
    "ROAD": "",
    "VILLANAME": "",
    "VILLAGE": "00",
    "TAMBON": "10",
    "AMPUR": "02",
    "CHANGWAT": "30",
    "TELEPHONE": "",
    "MOBILE": "",
    "D_UPDATE": "20130304182436"
  },
  {
    "HOSPCODE": "12251",
    "PID": "000010",
    "ADDRESSTYPE": "",
    "HOUSE_ID": "1",
    "HOUSETYPE": "9",
    "ROOMNO": "",
    "CONDO": "",
    "HOUSENO": "157/26,ม.9",
    "SOISUB": "",
    "SOIMAIN": "",
    "ROAD": "",
    "VILLANAME": "",
    "VILLAGE": "00",
    "TAMBON": "03",
    "AMPUR": "03",
    "CHANGWAT": "11",
    "TELEPHONE": "",
    "MOBILE": "",
    "D_UPDATE": "20130304182436"
  }
]
```
