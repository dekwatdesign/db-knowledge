# `bedtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bedtype | varchar(50) | NO | PRI |  |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| rate | double(22,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | bedtype | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "bedtype": "00",
    "name": "เตียงสามัญ",
    "rate": 50.0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "bedtype": "10",
    "name": "พิเศษ 1 (พัดลม)",
    "rate": 650.0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "bedtype": "11",
    "name": "พิเศษ 2 (เปิด Air)",
    "rate": 750.0,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
