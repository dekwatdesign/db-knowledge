# `nutrition_level`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutrition_level | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | nutrition_level | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "nutrition_level": 1,
    "name": "น้ำหนักน้อยกว่าเกณฑ์",
    "hos_guid": null
  },
  {
    "nutrition_level": 2,
    "name": "น้ำหนักค่อนข้างน้อย",
    "hos_guid": null
  },
  {
    "nutrition_level": 3,
    "name": "น้ำหนักตามเกณฑ์",
    "hos_guid": null
  },
  {
    "nutrition_level": 4,
    "name": "น้ำหนักค่อนข้างมาก",
    "hos_guid": null
  },
  {
    "nutrition_level": 5,
    "name": "น้ำหนักมากเกินเกณฑ์",
    "hos_guid": null
  }
]
```
