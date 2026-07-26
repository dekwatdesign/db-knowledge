# `marrystatus`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(1) | NO | PRI |  |  |  |
| name | varchar(20) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| code506 | char(1) | YES |  | NULL |  |  |
| nhso_marriage_code | varchar(3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "code": "1",
    "name": "โสด",
    "hos_guid": null,
    "code506": null,
    "nhso_marriage_code": "1"
  },
  {
    "code": "2",
    "name": "คู่/สมรส",
    "hos_guid": null,
    "code506": null,
    "nhso_marriage_code": "2"
  },
  {
    "code": "3",
    "name": "หม้าย",
    "hos_guid": null,
    "code506": null,
    "nhso_marriage_code": "3"
  },
  {
    "code": "4",
    "name": "หย่า",
    "hos_guid": null,
    "code506": null,
    "nhso_marriage_code": "4"
  },
  {
    "code": "5",
    "name": "ร้าง/แยกกันอยู่",
    "hos_guid": null,
    "code506": null,
    "nhso_marriage_code": "5"
  },
  {
    "code": "6",
    "name": "สมณะ",
    "hos_guid": null,
    "code506": null,
    "nhso_marriage_code": "6"
  },
  {
    "code": "9",
    "name": "ไม่ทราบ",
    "hos_guid": null,
    "code506": null,
    "nhso_marriage_code": "9"
  }
]
```
