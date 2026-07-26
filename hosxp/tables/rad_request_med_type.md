# `rad_request_med_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rad_request_med_type_id | int(11) | NO | PRI | 0 |  |  |
| rad_request_med_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_rad_request_med_type_name | rad_request_med_type_name | yes | 1 |
| PRIMARY | rad_request_med_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "rad_request_med_type_id": 1,
    "rad_request_med_type_name": "Generic"
  },
  {
    "rad_request_med_type_id": 2,
    "rad_request_med_type_name": "Original"
  }
]
```
