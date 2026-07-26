# `lab_items_colab_ct_map`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_items_colab_ct_map_id | int(11) | NO | PRI | 0 |  |  |
| lab_items_code | int(11) | YES | UNI | NULL |  |  |
| lab_items_colab_ct_type | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_items_code | lab_items_code | yes | 1 |
| PRIMARY | lab_items_colab_ct_map_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
