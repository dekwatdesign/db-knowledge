# `inv_durable_good_category`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inv_durable_good_category_id | int(11) | NO | PRI | 0 |  |  |
| inv_durable_good_category_name | varchar(50) | YES | UNI | NULL |  |  |
| inv_durable_good_category_code | varchar(5) | YES |  | NULL |  |  |
| inv_durable_good_category_percent | double(15,2) | YES |  | NULL |  |  |
| inv_durable_good_category_year | char(4) | YES |  | NULL |  |  |
| alert_active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_inv_durable_good_category_name | inv_durable_good_category_name | yes | 1 |
| PRIMARY | inv_durable_good_category_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "inv_durable_good_category_id": 1,
    "inv_durable_good_category_name": "สำนักงาน",
    "inv_durable_good_category_code": null,
    "inv_durable_good_category_percent": null,
    "inv_durable_good_category_year": null,
    "alert_active": null
  },
  {
    "inv_durable_good_category_id": 2,
    "inv_durable_good_category_name": "การศึกษา",
    "inv_durable_good_category_code": null,
    "inv_durable_good_category_percent": null,
    "inv_durable_good_category_year": null,
    "alert_active": null
  },
  {
    "inv_durable_good_category_id": 3,
    "inv_durable_good_category_name": "ยานพาหนะและขนส่ง",
    "inv_durable_good_category_code": null,
    "inv_durable_good_category_percent": null,
    "inv_durable_good_category_year": null,
    "alert_active": null
  },
  {
    "inv_durable_good_category_id": 4,
    "inv_durable_good_category_name": "การเกษตร",
    "inv_durable_good_category_code": null,
    "inv_durable_good_category_percent": null,
    "inv_durable_good_category_year": null,
    "alert_active": null
  },
  {
    "inv_durable_good_category_id": 5,
    "inv_durable_good_category_name": "ก่อสร้าง",
    "inv_durable_good_category_code": null,
    "inv_durable_good_category_percent": null,
    "inv_durable_good_category_year": null,
    "alert_active": null
  },
  {
    "inv_durable_good_category_id": 6,
    "inv_durable_good_category_name": "ไฟฟ้าและวิทยุ",
    "inv_durable_good_category_code": null,
    "inv_durable_good_category_percent": null,
    "inv_durable_good_category_year": null,
    "alert_active": null
  },
  {
    "inv_durable_good_category_id": 7,
    "inv_durable_good_category_name": "โฆษณาและเผยแพร่",
    "inv_durable_good_category_code": null,
    "inv_durable_good_category_percent": null,
    "inv_durable_good_category_year": null,
    "alert_active": null
  },
  {
    "inv_durable_good_category_id": 8,
    "inv_durable_good_category_name": "วิทยาศาสตร์หรือการแพทย์",
    "inv_durable_good_category_code": null,
    "inv_durable_good_category_percent": null,
    "inv_durable_good_category_year": null,
    "alert_active": null
  }
]
```
