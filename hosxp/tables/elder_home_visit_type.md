# `elder_home_visit_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| elder_home_visit_type_id | int(11) | NO | PRI | 0 |  |  |
| elder_home_visit_type_name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | elder_home_visit_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "elder_home_visit_type_id": 1,
    "elder_home_visit_type_name": "เยี่ยมผู้สูงอายุที่อยู่เพียงลำพัง",
    "hos_guid": null
  },
  {
    "elder_home_visit_type_id": 2,
    "elder_home_visit_type_name": "เยี่ยมผู้สูงอายุทั่วไป",
    "hos_guid": null
  }
]
```
