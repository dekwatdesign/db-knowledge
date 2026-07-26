# `ipd_doctor_order_rx_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| wait_rx_ack_count | int(11) | YES |  | NULL |  |  |
| wait_medication_list | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an_wait_count | an | no | 1 |
| ix_an_wait_count | wait_rx_ack_count | no | 2 |
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "an": "680001723",
    "wait_rx_ack_count": 0,
    "wait_medication_list": ""
  },
  {
    "an": "680001950",
    "wait_rx_ack_count": 0,
    "wait_medication_list": ""
  },
  {
    "an": "680001963",
    "wait_rx_ack_count": 0,
    "wait_medication_list": ""
  },
  {
    "an": "680001949",
    "wait_rx_ack_count": 0,
    "wait_medication_list": ""
  },
  {
    "an": "690000660",
    "wait_rx_ack_count": 0,
    "wait_medication_list": ""
  }
]
```
