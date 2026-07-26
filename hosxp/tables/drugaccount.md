# `drugaccount`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugaccount | varchar(2) | NO | PRI |  |  |  |
| name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | drugaccount | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "drugaccount": "-",
    "name": "ยานอกบัญชียาหลักแห่งชาติ (NED)"
  },
  {
    "drugaccount": "ก",
    "name": "ยาในบัญชียาหลักแห่งชาติ ก"
  },
  {
    "drugaccount": "ข",
    "name": "ยาในบัญชียาหลักแห่งชาติ ข"
  },
  {
    "drugaccount": "ค",
    "name": "ยาในบัญชียาหลักแห่งชาติ ค"
  },
  {
    "drugaccount": "ง",
    "name": "ยาในบัญชียาหลักแห่งชาติ ง"
  },
  {
    "drugaccount": "จ1",
    "name": "ยาในบัญชียาหลักแห่งชาติ จ(1)"
  },
  {
    "drugaccount": "จ2",
    "name": "ยาในบัญชียาหลักแห่งชาติ จ(2)"
  }
]
```
