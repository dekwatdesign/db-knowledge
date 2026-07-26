# `lab_items_normal_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_items_code | int(11) | NO | PRI | 0 |  |  |
| normal_value | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | lab_items_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "lab_items_code": 251,
    "normal_value": "Negative",
    "hos_guid": null
  },
  {
    "lab_items_code": 359,
    "normal_value": "Male 2.1-17.7, Female 2.8-29.2",
    "hos_guid": null
  }
]
```
