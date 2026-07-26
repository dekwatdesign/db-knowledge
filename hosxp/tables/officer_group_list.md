# `officer_group_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| officer_group_list_id | int(11) | NO | PRI | 0 |  |  |
| officer_id | int(11) | YES | MUL | NULL |  |  |
| officer_group_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_officer_group_list_uni | officer_id | yes | 1 |
| ix_officer_group_list_uni | officer_group_id | yes | 2 |
| ix_officer_group_list_uni_index | officer_group_id | yes | 1 |
| ix_officer_group_list_uni_index | officer_id | yes | 2 |
| ix_officer_id | officer_id | no | 1 |
| PRIMARY | officer_group_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "officer_group_list_id": 1,
    "officer_id": 1,
    "officer_group_id": 1
  },
  {
    "officer_group_list_id": 2,
    "officer_id": 2,
    "officer_group_id": 1
  }
]
```
