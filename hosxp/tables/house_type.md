# `house_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_type_id | int(11) | NO | PRI | 0 |  |  |
| house_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_house_type_name | house_type_name | yes | 1 |
| PRIMARY | house_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "house_type_id": 1,
    "house_type_name": "บ้าน",
    "hos_guid": "{54BBF6A2-F61B-11DE-BFF4-00215E472B30}"
  },
  {
    "house_type_id": 2,
    "house_type_name": "วัด/ศาสนสถาน",
    "hos_guid": "{54BBF8AA-F61B-11DE-BFF4-00215E472B30}"
  },
  {
    "house_type_id": 3,
    "house_type_name": "โรงเรียน",
    "hos_guid": "{54BBF99A-F61B-11DE-BFF4-00215E472B30}"
  },
  {
    "house_type_id": 4,
    "house_type_name": "อบต.",
    "hos_guid": "{54BBFA80-F61B-11DE-BFF4-00215E472B30}"
  },
  {
    "house_type_id": 5,
    "house_type_name": "สถานบริการสาธาณสุข",
    "hos_guid": "{54BBFB66-F61B-11DE-BFF4-00215E472B30}"
  },
  {
    "house_type_id": 6,
    "house_type_name": "สถานที่ราชการ",
    "hos_guid": "{54BBFC4C-F61B-11DE-BFF4-00215E472B30}"
  }
]
```
