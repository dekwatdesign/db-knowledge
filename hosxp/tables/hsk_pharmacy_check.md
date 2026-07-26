# `hsk_pharmacy_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(10) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| icode | int(5) | YES | MUL | NULL |  |  |
| icode_type | int(1) | YES |  | NULL |  |  |
| doctor | varchar(255) | YES |  | NULL |  |  |
| med_plan_number | int(11) | YES | MUL | NULL |  |  |
| orderdate | date | YES | MUL | NULL |  |  |
| offdate | date | YES |  | NULL |  |  |
| drugusage | varchar(255) | YES |  | NULL |  |  |
| sp_user | varchar(255) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| orderstatus | char(1) | YES |  | NULL |  |  |
| staff | varchar(255) | YES |  | NULL |  |  |
| d_date | date | YES |  | NULL |  |  |
| d_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| icode | icode | no | 1 |
| med_plan_number | med_plan_number | no | 1 |
| orderdate | orderdate | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "id": 350604,
    "an": "680000035",
    "icode": 1000144,
    "icode_type": 1,
    "doctor": "0042",
    "med_plan_number": 38525,
    "orderdate": "2025-01-06",
    "offdate": null,
    "drugusage": "0000840",
    "sp_user": "",
    "qty": 1,
    "orderstatus": "C",
    "staff": "[MASKED_FULLNAME]",
    "d_date": "2025-01-06",
    "d_time": "15:49:58"
  }
]
```
