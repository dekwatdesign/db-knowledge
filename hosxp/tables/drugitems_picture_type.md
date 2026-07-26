# `drugitems_picture_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_picture_type_id | int(11) | NO | PRI | 0 |  |  |
| drugitems_picture_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drugitems_picture_type_name | drugitems_picture_type_name | yes | 1 |
| PRIMARY | drugitems_picture_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "drugitems_picture_type_id": "[MASKED_AVATAR]",
    "drugitems_picture_type_name": "[MASKED_AVATAR]"
  },
  {
    "drugitems_picture_type_id": "[MASKED_AVATAR]",
    "drugitems_picture_type_name": "[MASKED_AVATAR]"
  }
]
```
