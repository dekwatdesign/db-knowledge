# `doctor_keyword`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icode | varchar(7) | YES | MUL | NULL |  |  |
| keyword | varchar(25) | YES | MUL | NULL |  |  |
| doctor | varchar(7) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| doctor | doctor | no | 1 |
| icode | icode | no | 1 |
| ix_doctor_keyword | doctor | no | 1 |
| ix_doctor_keyword | keyword | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| keyword | keyword | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "icode": "3000020",
    "keyword": "100",
    "doctor": "069",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "3001957",
    "keyword": "",
    "doctor": "351",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000167",
    "keyword": "",
    "doctor": "066",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
