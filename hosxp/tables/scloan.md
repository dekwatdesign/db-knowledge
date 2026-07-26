# `scloan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lnnum | varchar(5) | YES | UNI | NULL |  |  |
| code | varchar(4) | YES | MUL | NULL |  |  |
| lnmonth | date | YES | MUL | NULL |  |  |
| lnreason | varchar(250) | YES |  | NULL |  |  |
| amount | double(22,3) | YES |  | NULL |  |  |
| clearreason | varchar(250) | YES |  | NULL |  |  |
| cleared | char(1) | YES | MUL | NULL |  |  |
| interest | double(22,3) | YES |  | NULL |  |  |
| lnmonthcount | tinyint(4) | YES |  | NULL |  |  |
| remain | double(22,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| cleared | cleared | no | 1 |
| code | code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| lnmonth | lnmonth | no | 1 |
| lnnum_unique | lnnum | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "lnnum": "00001",
    "code": "0001",
    "lnmonth": "2001-10-01",
    "lnreason": "",
    "amount": 3000.0,
    "clearreason": null,
    "cleared": "N",
    "interest": 5.0,
    "lnmonthcount": 2,
    "remain": 3000.0,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
