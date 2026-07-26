# `james_f43_card`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| INSTYPE_OLD | varchar(2) | YES |  | NULL |  |  |
| INSTYPE_NEW | varchar(4) | YES |  | NULL |  |  |
| INSID | varchar(18) | YES |  | NULL |  |  |
| STARTDATE | varchar(8) | YES |  | NULL |  |  |
| EXPIREDATE | varchar(8) | YES |  | NULL |  |  |
| MAIN | varchar(5) | YES |  | NULL |  |  |
| SUB | varchar(5) | YES |  | NULL |  |  |
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
    "PID": "000001",
    "INSTYPE_OLD": "11",
    "INSTYPE_NEW": "0100",
    "INSID": "",
    "STARTDATE": "",
    "EXPIREDATE": "",
    "MAIN": "",
    "SUB": "",
    "D_UPDATE": "20140117185517"
  },
  {
    "HOSPCODE": "12251",
    "PID": "000002",
    "INSTYPE_OLD": "74",
    "INSTYPE_NEW": "0100",
    "INSID": "ท7455729373",
    "STARTDATE": "20120115",
    "EXPIREDATE": "19900101",
    "MAIN": "11775",
    "SUB": "24024",
    "D_UPDATE": "20140128162347"
  },
  {
    "HOSPCODE": "12251",
    "PID": "000003",
    "INSTYPE_OLD": "11",
    "INSTYPE_NEW": "0100",
    "INSID": "8967558516",
    "STARTDATE": "20100215",
    "EXPIREDATE": "20580607",
    "MAIN": "10685",
    "SUB": "24027",
    "D_UPDATE": "20131011204427"
  },
  {
    "HOSPCODE": "12251",
    "PID": "000004",
    "INSTYPE_OLD": "10",
    "INSTYPE_NEW": "9100",
    "INSID": "",
    "STARTDATE": "",
    "EXPIREDATE": "",
    "MAIN": "",
    "SUB": "",
    "D_UPDATE": "20130304182436"
  },
  {
    "HOSPCODE": "12251",
    "PID": "000005",
    "INSTYPE_OLD": "10",
    "INSTYPE_NEW": "9100",
    "INSID": "",
    "STARTDATE": "",
    "EXPIREDATE": "",
    "MAIN": "",
    "SUB": "",
    "D_UPDATE": "20130304182436"
  },
  {
    "HOSPCODE": "12251",
    "PID": "000006",
    "INSTYPE_OLD": "10",
    "INSTYPE_NEW": "9100",
    "INSID": "",
    "STARTDATE": "",
    "EXPIREDATE": "",
    "MAIN": "",
    "SUB": "",
    "D_UPDATE": "20130304182436"
  },
  {
    "HOSPCODE": "12251",
    "PID": "000007",
    "INSTYPE_OLD": "11",
    "INSTYPE_NEW": "0100",
    "INSID": "ท7175061768",
    "STARTDATE": "20120109",
    "EXPIREDATE": "20121105",
    "MAIN": "10685",
    "SUB": "00937",
    "D_UPDATE": "20130304182436"
  },
  {
    "HOSPCODE": "12251",
    "PID": "000008",
    "INSTYPE_OLD": "10",
    "INSTYPE_NEW": "9100",
    "INSID": "",
    "STARTDATE": "",
    "EXPIREDATE": "",
    "MAIN": "",
    "SUB": "",
    "D_UPDATE": "20130304182436"
  }
]
```
