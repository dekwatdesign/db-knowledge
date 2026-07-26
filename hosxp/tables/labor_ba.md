# `labor_ba`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| labor_ba_id | int(11) | NO | PRI | 0 |  |  |
| labor_ba_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| export_code | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_labor_ba_name | labor_ba_name | yes | 1 |
| PRIMARY | labor_ba_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "labor_ba_id": 1,
    "labor_ba_name": "ไม่มีภาวะ Birth Asphyxia",
    "hos_guid": "{1725E131-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "export_code": null
  },
  {
    "labor_ba_id": 2,
    "labor_ba_name": "มีภาวะ Birth Asphyxia",
    "hos_guid": "{1725E9BC-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "export_code": null
  }
]
```
