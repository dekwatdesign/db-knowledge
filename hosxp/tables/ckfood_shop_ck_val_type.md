# `ckfood_shop_ck_val_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckfood_shop_ck_val_type_id | int(11) | NO | PRI | 0 |  |  |
| ckfood_shop_ck_val_type_name | varchar(255) | YES |  | NULL |  |  |
| ckfood_shop_ck_val | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ckfood_shop_ck_val_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "ckfood_shop_ck_val_type_id": 1,
    "ckfood_shop_ck_val_type_name": "แย่",
    "ckfood_shop_ck_val": 1
  },
  {
    "ckfood_shop_ck_val_type_id": 2,
    "ckfood_shop_ck_val_type_name": "ต้องปรับปรุง",
    "ckfood_shop_ck_val": 2
  },
  {
    "ckfood_shop_ck_val_type_id": 3,
    "ckfood_shop_ck_val_type_name": "พอใช้",
    "ckfood_shop_ck_val": 3
  },
  {
    "ckfood_shop_ck_val_type_id": 4,
    "ckfood_shop_ck_val_type_name": "ดี",
    "ckfood_shop_ck_val": 4
  },
  {
    "ckfood_shop_ck_val_type_id": 5,
    "ckfood_shop_ck_val_type_name": "ดีมาก",
    "ckfood_shop_ck_val": 5
  }
]
```
