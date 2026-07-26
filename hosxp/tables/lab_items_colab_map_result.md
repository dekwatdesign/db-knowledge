# `lab_items_colab_map_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_items_colab_map_result_id | int(11) | NO | PRI | 0 |  |  |
| lab_order_result | varchar(250) | YES |  | NULL |  |  |
| colab_test_result_id | int(11) | YES |  | NULL |  |  |
| lab_items_colab_map_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reflab_items_colab_map1 | lab_items_colab_map_id | no | 1 |
| PRIMARY | lab_items_colab_map_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
