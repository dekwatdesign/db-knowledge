# `house_herb_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_herb_type_id | int(11) | NO | PRI | 0 |  |  |
| hous_herb_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hous_herb_type_name | hous_herb_type_name | yes | 1 |
| PRIMARY | house_herb_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "house_herb_type_id": 1,
    "hous_herb_type_name": "ว่านหางจรเข้",
    "hos_guid": "{9946D2A8-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_herb_type_id": 2,
    "hous_herb_type_name": "ชุมเห็ดเทศ",
    "hos_guid": "{9946D4E2-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_herb_type_id": 3,
    "hous_herb_type_name": "ฟ้าทลายโจร",
    "hos_guid": "{9946D5F0-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_herb_type_id": 4,
    "hous_herb_type_name": "เสลดพังพอน",
    "hos_guid": "{9946D6E0-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_herb_type_id": 5,
    "hous_herb_type_name": "ขมิ้นชัน",
    "hos_guid": "{9946D7D0-F542-11DE-BFF4-00215E472B30}"
  }
]
```
