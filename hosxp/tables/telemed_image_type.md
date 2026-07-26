# `telemed_image_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| telemed_image_type_id | int(11) | NO | PRI | 0 |  |  |
| telemed_image_type_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | telemed_image_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "telemed_image_type_id": 1,
    "telemed_image_type_name": "Telemedicine"
  },
  {
    "telemed_image_type_id": 2,
    "telemed_image_type_name": "Telepharmacy"
  }
]
```
