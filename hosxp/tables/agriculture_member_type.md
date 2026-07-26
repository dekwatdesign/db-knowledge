# `agriculture_member_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| agriculture_member_type_id | int(11) | NO | PRI | 0 |  |  |
| agriculture_member_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_agriculture_member_type_name | agriculture_member_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | agriculture_member_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "agriculture_member_type_id": 0,
    "agriculture_member_type_name": "ไม่เป็นสมาชิก",
    "hos_guid": "{44022FEA-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "agriculture_member_type_id": 1,
    "agriculture_member_type_name": "ธนาคารเพื่อการเกษตร",
    "hos_guid": "{4402321A-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "agriculture_member_type_id": 2,
    "agriculture_member_type_name": "สหกรณ์การเกษตร",
    "hos_guid": "{4402331E-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "agriculture_member_type_id": 3,
    "agriculture_member_type_name": "กลุ่มเกษตรกร",
    "hos_guid": "{44023404-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "agriculture_member_type_id": 9,
    "agriculture_member_type_name": "ไม่ทราบ",
    "hos_guid": "{440234EA-F542-11DE-BFF4-00215E472B30}"
  }
]
```
