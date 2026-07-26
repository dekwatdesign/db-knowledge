# `wbc_transfer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| wbc_transfer_id | int(11) | NO | PRI | 0 |  |  |
| wbc_transfer_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_wbc_transfer_name | wbc_transfer_name | yes | 1 |
| PRIMARY | wbc_transfer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "wbc_transfer_id": 1,
    "wbc_transfer_name": "นัดประเมินซ้ำ 1 เดือน",
    "hos_guid": "{4D503778-E5DD-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "wbc_transfer_id": 2,
    "wbc_transfer_name": "กระตุ้นพัฒนาการ",
    "hos_guid": "{4D503B2E-E5DD-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "wbc_transfer_id": 3,
    "wbc_transfer_name": "ส่งต่อไปรักษาที่อื่น",
    "hos_guid": "{4D503DD3-E5DD-11DF-BBCF-F3CA1C2D0000}"
  }
]
```
