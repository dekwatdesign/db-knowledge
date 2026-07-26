# `home_rx_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| home_rx_status_id | int(11) | NO | PRI | 0 |  |  |
| home_rx_status_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_home_rx_status_name | home_rx_status_name | yes | 1 |
| PRIMARY | home_rx_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "home_rx_status_id": 1,
    "home_rx_status_name": "รับยาที่โรงพยาบาล"
  },
  {
    "home_rx_status_id": 2,
    "home_rx_status_name": "รับยาที่บ้าน"
  }
]
```
