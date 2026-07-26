# `james_f43_provider`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PROVIDER | varchar(15) | YES |  | NULL |  |  |
| REGISTERNO | varchar(15) | YES |  | NULL |  |  |
| COUNCIL | varchar(2) | YES |  | NULL |  |  |
| CID | varchar(13) | YES | MUL | NULL |  |  |
| PRENAME | varchar(20) | YES |  | NULL |  |  |
| NAME | varchar(50) | YES |  | NULL |  |  |
| LNAME | varchar(50) | YES |  | NULL |  |  |
| SEX | varchar(1) | YES |  | NULL |  |  |
| BIRTH | varchar(8) | YES |  | NULL |  |  |
| PROVIDERTYPE | varchar(2) | YES |  | NULL |  |  |
| STARTDATE | varchar(8) | YES |  | NULL |  |  |
| OUTDATE | varchar(8) | YES |  | NULL |  |  |
| MOVEFROM | varchar(5) | YES |  | NULL |  |  |
| MOVETO | varchar(5) | YES |  | NULL |  |  |
| D_UPDATE | varchar(14) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| CID | CID | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "HOSPCODE": "12251",
    "PROVIDER": "001",
    "REGISTERNO": "ว.3219",
    "COUNCIL": "",
    "CID": "",
    "PRENAME": "",
    "NAME": "[MASKED_FULLNAME]",
    "LNAME": "",
    "SEX": "",
    "BIRTH": "",
    "PROVIDERTYPE": "",
    "STARTDATE": "",
    "OUTDATE": "",
    "MOVEFROM": "",
    "MOVETO": "",
    "D_UPDATE": ""
  },
  {
    "HOSPCODE": "12251",
    "PROVIDER": "004",
    "REGISTERNO": "",
    "COUNCIL": "",
    "CID": "",
    "PRENAME": "",
    "NAME": "[MASKED_FULLNAME]",
    "LNAME": "",
    "SEX": "",
    "BIRTH": "",
    "PROVIDERTYPE": "",
    "STARTDATE": "",
    "OUTDATE": "",
    "MOVEFROM": "",
    "MOVETO": "",
    "D_UPDATE": ""
  },
  {
    "HOSPCODE": "12251",
    "PROVIDER": "006",
    "REGISTERNO": "",
    "COUNCIL": "",
    "CID": "",
    "PRENAME": "",
    "NAME": "[MASKED_FULLNAME]",
    "LNAME": "",
    "SEX": "",
    "BIRTH": "",
    "PROVIDERTYPE": "",
    "STARTDATE": "",
    "OUTDATE": "",
    "MOVEFROM": "",
    "MOVETO": "",
    "D_UPDATE": ""
  },
  {
    "HOSPCODE": "12251",
    "PROVIDER": "009",
    "REGISTERNO": "",
    "COUNCIL": "",
    "CID": "",
    "PRENAME": "",
    "NAME": "รับยาเดิม",
    "LNAME": "",
    "SEX": "",
    "BIRTH": "",
    "PROVIDERTYPE": "",
    "STARTDATE": "",
    "OUTDATE": "",
    "MOVEFROM": "",
    "MOVETO": "",
    "D_UPDATE": "20140306114737"
  },
  {
    "HOSPCODE": "12251",
    "PROVIDER": "011",
    "REGISTERNO": "ว.13137",
    "COUNCIL": "",
    "CID": "",
    "PRENAME": "",
    "NAME": "[MASKED_FULLNAME]",
    "LNAME": "",
    "SEX": "",
    "BIRTH": "",
    "PROVIDERTYPE": "",
    "STARTDATE": "",
    "OUTDATE": "",
    "MOVEFROM": "",
    "MOVETO": "",
    "D_UPDATE": ""
  },
  {
    "HOSPCODE": "12251",
    "PROVIDER": "021",
    "REGISTERNO": "",
    "COUNCIL": "",
    "CID": "",
    "PRENAME": "",
    "NAME": "[MASKED_FULLNAME]",
    "LNAME": "",
    "SEX": "",
    "BIRTH": "",
    "PROVIDERTYPE": "",
    "STARTDATE": "",
    "OUTDATE": "",
    "MOVEFROM": "",
    "MOVETO": "",
    "D_UPDATE": ""
  },
  {
    "HOSPCODE": "12251",
    "PROVIDER": "040",
    "REGISTERNO": "",
    "COUNCIL": "",
    "CID": "",
    "PRENAME": "",
    "NAME": "[MASKED_FULLNAME]",
    "LNAME": "",
    "SEX": "",
    "BIRTH": "",
    "PROVIDERTYPE": "",
    "STARTDATE": "",
    "OUTDATE": "",
    "MOVEFROM": "",
    "MOVETO": "",
    "D_UPDATE": ""
  },
  {
    "HOSPCODE": "12251",
    "PROVIDER": "052",
    "REGISTERNO": "ว.32079",
    "COUNCIL": "",
    "CID": "",
    "PRENAME": "",
    "NAME": "[MASKED_FULLNAME]",
    "LNAME": "",
    "SEX": "",
    "BIRTH": "",
    "PROVIDERTYPE": "",
    "STARTDATE": "",
    "OUTDATE": "",
    "MOVEFROM": "",
    "MOVETO": "",
    "D_UPDATE": "20140306114953"
  }
]
```
