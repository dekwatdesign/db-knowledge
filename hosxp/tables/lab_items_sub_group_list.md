# `lab_items_sub_group_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_items_sub_group_code | int(11) | NO | PRI | 0 |  |  |
| lab_items_code | int(11) | NO | PRI | 0 |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_id | id | no | 1 |
| lab_items_code | lab_items_code | no | 1 |
| lab_items_sub_group_code | lab_items_sub_group_code | no | 1 |
| PRIMARY | lab_items_sub_group_code | yes | 1 |
| PRIMARY | lab_items_code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "lab_items_sub_group_code": 1,
    "lab_items_code": 191,
    "hos_guid": null,
    "id": null
  },
  {
    "lab_items_sub_group_code": 1,
    "lab_items_code": 311,
    "hos_guid": null,
    "id": null
  },
  {
    "lab_items_sub_group_code": 1,
    "lab_items_code": 313,
    "hos_guid": null,
    "id": null
  },
  {
    "lab_items_sub_group_code": 1,
    "lab_items_code": 413,
    "hos_guid": null,
    "id": null
  },
  {
    "lab_items_sub_group_code": 1,
    "lab_items_code": 414,
    "hos_guid": null,
    "id": null
  },
  {
    "lab_items_sub_group_code": 1,
    "lab_items_code": 415,
    "hos_guid": null,
    "id": null
  },
  {
    "lab_items_sub_group_code": 1,
    "lab_items_code": 438,
    "hos_guid": null,
    "id": null
  },
  {
    "lab_items_sub_group_code": 1,
    "lab_items_code": 439,
    "hos_guid": null,
    "id": null
  }
]
```
