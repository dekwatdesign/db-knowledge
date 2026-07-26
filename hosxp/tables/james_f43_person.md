# `james_f43_person`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| CID | varchar(13) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| HID | varchar(14) | YES |  | NULL |  |  |
| PRENAME | varchar(3) | YES |  | NULL |  |  |
| NAME | varchar(50) | YES |  | NULL |  |  |
| LNAME | varchar(50) | YES |  | NULL |  |  |
| HN | varchar(15) | YES |  | NULL |  |  |
| SEX | varchar(1) | YES |  | NULL |  |  |
| BIRTH | varchar(8) | YES |  | NULL |  |  |
| MSTATUS | varchar(1) | YES |  | NULL |  |  |
| OCCUPATION_OLD | varchar(3) | YES |  | NULL |  |  |
| OCCUPATION_NEW | varchar(4) | YES |  | NULL |  |  |
| RACE | varchar(3) | YES |  | NULL |  |  |
| NATION | varchar(3) | YES |  | NULL |  |  |
| RELIGION | varchar(2) | YES |  | NULL |  |  |
| EDUCATION | varchar(2) | YES |  | NULL |  |  |
| FSTATUS | varchar(1) | YES |  | NULL |  |  |
| FATHER | varchar(13) | YES |  | NULL |  |  |
| MOTHER | varchar(13) | YES |  | NULL |  |  |
| COUPLE | varchar(13) | YES |  | NULL |  |  |
| VSTATUS | varchar(1) | YES |  | NULL |  |  |
| MOVEIN | varchar(8) | YES |  | NULL |  |  |
| DISCHARGE | varchar(1) | YES |  | NULL |  |  |
| DDISCHARGE | varchar(8) | YES |  | NULL |  |  |
| ABOGROUP | varchar(1) | YES |  | NULL |  |  |
| RHGROUP | varchar(1) | YES |  | NULL |  |  |
| LABOR | varchar(2) | YES |  | NULL |  |  |
| PASSPORT | varchar(8) | YES |  | NULL |  |  |
| TYPEAREA | varchar(1) | YES |  | NULL |  |  |
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
    "CID": "1xxxxxxxxxxxx",
    "PID": "000001",
    "HID": "1",
    "PRENAME": "001",
    "NAME": "[MASKED_FULLNAME]",
    "LNAME": "[MASKED_LNAME]",
    "HN": "560000001",
    "SEX": "1",
    "BIRTH": "20080506",
    "MSTATUS": "1",
    "OCCUPATION_OLD": "900",
    "OCCUPATION_NEW": "9999",
    "RACE": "099",
    "NATION": "099",
    "RELIGION": "01",
    "EDUCATION": "00",
    "FSTATUS": "",
    "FATHER": "",
    "MOTHER": "",
    "COUPLE": "",
    "VSTATUS": "",
    "MOVEIN": "18991230",
    "DISCHARGE": "9",
    "DDISCHARGE": "",
    "ABOGROUP": "",
    "RHGROUP": "",
    "LABOR": "",
    "PASSPORT": "",
    "TYPEAREA": "1",
    "D_UPDATE": "20140117185517"
  },
  {
    "HOSPCODE": "12251",
    "CID": "1xxxxxxxxxxxx",
    "PID": "000002",
    "HID": "1",
    "PRENAME": "001",
    "NAME": "[MASKED_FULLNAME]",
    "LNAME": "[MASKED_LNAME]",
    "HN": "530175250",
    "SEX": "1",
    "BIRTH": "20031005",
    "MSTATUS": "1",
    "OCCUPATION_OLD": "900",
    "OCCUPATION_NEW": "9999",
    "RACE": "099",
    "NATION": "099",
    "RELIGION": "01",
    "EDUCATION": "02",
    "FSTATUS": "",
    "FATHER": "1xxxxxxxxxxxx",
    "MOTHER": "1xxxxxxxxxxxx",
    "COUPLE": "",
    "VSTATUS": "",
    "MOVEIN": "18991230",
    "DISCHARGE": "9",
    "DDISCHARGE": "",
    "ABOGROUP": "",
    "RHGROUP": "",
    "LABOR": "",
    "PASSPORT": "",
    "TYPEAREA": "1",
    "D_UPDATE": "20140128162347"
  },
  {
    "HOSPCODE": "12251",
    "CID": "1xxxxxxxxxxxx",
    "PID": "000003",
    "HID": "1",
    "PRENAME": "003",
    "NAME": "[MASKED_FULLNAME]",
    "LNAME": "[MASKED_LNAME]",
    "HN": "530218649",
    "SEX": "1",
    "BIRTH": "19980608",
    "MSTATUS": "1",
    "OCCUPATION_OLD": "900",
    "OCCUPATION_NEW": "9999",
    "RACE": "099",
    "NATION": "099",
    "RELIGION": "01",
    "EDUCATION": "00",
    "FSTATUS": "",
    "FATHER": "1xxxxxxxxxxxx",
    "MOTHER": "1xxxxxxxxxxxx",
    "COUPLE": "",
    "VSTATUS": "",
    "MOVEIN": "18991230",
    "DISCHARGE": "9",
    "DDISCHARGE": "",
    "ABOGROUP": "",
    "RHGROUP": "",
    "LABOR": "",
    "PASSPORT": "",
    "TYPEAREA": "4",
    "D_UPDATE": "20131011204427"
  },
  {
    "HOSPCODE": "12251",
    "CID": "1xxxxxxxxxxxx",
    "PID": "000004",
    "HID": "1",
    "PRENAME": "003",
    "NAME": "[MASKED_FULLNAME]",
    "LNAME": "[MASKED_LNAME]",
    "HN": "530226552",
    "SEX": "1",
    "BIRTH": "19851114",
    "MSTATUS": "1",
    "OCCUPATION_OLD": "903",
    "OCCUPATION_NEW": "",
    "RACE": "099",
    "NATION": "099",
    "RELIGION": "01",
    "EDUCATION": "00",
    "FSTATUS": "",
    "FATHER": "",
    "MOTHER": "",
    "COUPLE": "",
    "VSTATUS": "",
    "MOVEIN": "18991230",
    "DISCHARGE": "9",
    "DDISCHARGE": "",
    "ABOGROUP": "",
    "RHGROUP": "",
    "LABOR": "",
    "PASSPORT": "",
    "TYPEAREA": "4",
    "D_UPDATE": "20130304182436"
  },
  {
    "HOSPCODE": "12251",
    "CID": "1xxxxxxxxxxxx",
    "PID": "000004",
    "HID": "1",
    "PRENAME": "003",
    "NAME": "[MASKED_FULLNAME]",
    "LNAME": "[MASKED_LNAME]",
    "HN": "530226552",
    "SEX": "1",
    "BIRTH": "19851114",
    "MSTATUS": "1",
    "OCCUPATION_OLD": "903",
    "OCCUPATION_NEW": "",
    "RACE": "099",
    "NATION": "099",
    "RELIGION": "01",
    "EDUCATION": "00",
    "FSTATUS": "",
    "FATHER": "",
    "MOTHER": "",
    "COUPLE": "",
    "VSTATUS": "",
    "MOVEIN": "18991230",
    "DISCHARGE": "9",
    "DDISCHARGE": "",
    "ABOGROUP": "",
    "RHGROUP": "",
    "LABOR": "",
    "PASSPORT": "",
    "TYPEAREA": "4",
    "D_UPDATE": "20130304182436"
  },
  {
    "HOSPCODE": "12251",
    "CID": "1xxxxxxxxxxxx",
    "PID": "000005",
    "HID": "1",
    "PRENAME": "003",
    "NAME": "[MASKED_FULLNAME]",
    "LNAME": "[MASKED_LNAME]",
    "HN": "530104645",
    "SEX": "1",
    "BIRTH": "19850912",
    "MSTATUS": "1",
    "OCCUPATION_OLD": "900",
    "OCCUPATION_NEW": "9999",
    "RACE": "099",
    "NATION": "099",
    "RELIGION": "01",
    "EDUCATION": "00",
    "FSTATUS": "",
    "FATHER": "",
    "MOTHER": "",
    "COUPLE": "",
    "VSTATUS": "",
    "MOVEIN": "18991230",
    "DISCHARGE": "9",
    "DDISCHARGE": "",
    "ABOGROUP": "",
    "RHGROUP": "",
    "LABOR": "",
    "PASSPORT": "",
    "TYPEAREA": "4",
    "D_UPDATE": "20130304182436"
  },
  {
    "HOSPCODE": "12251",
    "CID": "1xxxxxxxxxxxx",
    "PID": "000006",
    "HID": "1",
    "PRENAME": "003",
    "NAME": "[MASKED_FULLNAME]",
    "LNAME": "[MASKED_LNAME]",
    "HN": "530104745",
    "SEX": "1",
    "BIRTH": "19790919",
    "MSTATUS": "1",
    "OCCUPATION_OLD": "000",
    "OCCUPATION_NEW": "9999",
    "RACE": "099",
    "NATION": "099",
    "RELIGION": "01",
    "EDUCATION": "00",
    "FSTATUS": "",
    "FATHER": "",
    "MOTHER": "",
    "COUPLE": "",
    "VSTATUS": "",
    "MOVEIN": "18991230",
    "DISCHARGE": "9",
    "DDISCHARGE": "",
    "ABOGROUP": "",
    "RHGROUP": "",
    "LABOR": "",
    "PASSPORT": "",
    "TYPEAREA": "4",
    "D_UPDATE": "20130304182436"
  },
  {
    "HOSPCODE": "12251",
    "CID": "1xxxxxxxxxxxx",
    "PID": "000007",
    "HID": "1",
    "PRENAME": "001",
    "NAME": "[MASKED_FULLNAME]",
    "LNAME": "[MASKED_LNAME]",
    "HN": "550000032",
    "SEX": "1",
    "BIRTH": "20081116",
    "MSTATUS": "1",
    "OCCUPATION_OLD": "900",
    "OCCUPATION_NEW": "9999",
    "RACE": "099",
    "NATION": "099",
    "RELIGION": "01",
    "EDUCATION": "00",
    "FSTATUS": "",
    "FATHER": "1xxxxxxxxxxxx",
    "MOTHER": "1xxxxxxxxxxxx",
    "COUPLE": "",
    "VSTATUS": "",
    "MOVEIN": "18991230",
    "DISCHARGE": "9",
    "DDISCHARGE": "",
    "ABOGROUP": "3",
    "RHGROUP": "",
    "LABOR": "",
    "PASSPORT": "",
    "TYPEAREA": "1",
    "D_UPDATE": "20130304182436"
  }
]
```
