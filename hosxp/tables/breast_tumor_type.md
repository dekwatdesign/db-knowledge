# `breast_tumor_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| breast_tumor_type_id | int(11) | NO | PRI | 0 |  |  |
| breast_tumor_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_breast_tumor_type_name | breast_tumor_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | breast_tumor_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "breast_tumor_type_id": 1,
    "breast_tumor_type_name": "ไม่พบ",
    "hos_guid": null
  },
  {
    "breast_tumor_type_id": 2,
    "breast_tumor_type_name": "น้อยกว่า 2 เซนติเมตร",
    "hos_guid": null
  },
  {
    "breast_tumor_type_id": 3,
    "breast_tumor_type_name": "ขนาด 2-5 เซนติเมตร",
    "hos_guid": null
  },
  {
    "breast_tumor_type_id": 4,
    "breast_tumor_type_name": "มากกว่า 5 เซนติเมตร",
    "hos_guid": null
  }
]
```
