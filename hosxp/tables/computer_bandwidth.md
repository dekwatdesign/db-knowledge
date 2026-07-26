# `computer_bandwidth`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| computer_name | varchar(200) | NO | PRI |  |  |  |
| test_date | date | YES |  | NULL |  |  |
| ip_address | varchar(100) | YES |  | NULL |  |  |
| bandwidth_mbps | double(15,3) | YES |  | NULL |  |  |
| measure_tick | int(11) | YES |  | NULL |  |  |
| test_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | computer_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "computer_name": "A54-0049",
    "test_date": "2023-06-07",
    "ip_address": "192.168.10.113",
    "bandwidth_mbps": 2.783,
    "measure_tick": 1078,
    "test_time": "10:15:09"
  },
  {
    "computer_name": "A54-0062",
    "test_date": "2023-02-15",
    "ip_address": "192.168.1.38",
    "bandwidth_mbps": 5.66,
    "measure_tick": 530,
    "test_time": "8:22:22"
  },
  {
    "computer_name": "A54-0078",
    "test_date": "2023-06-07",
    "ip_address": "192.168.1.66",
    "bandwidth_mbps": 5.825,
    "measure_tick": 515,
    "test_time": "9:02:09"
  },
  {
    "computer_name": "A54-0079",
    "test_date": "2023-06-07",
    "ip_address": "192.168.1.15",
    "bandwidth_mbps": 9.615,
    "measure_tick": 312,
    "test_time": "7:44:10"
  },
  {
    "computer_name": "A54-0080",
    "test_date": "2023-06-07",
    "ip_address": "192.168.1.195",
    "bandwidth_mbps": 5.65,
    "measure_tick": 531,
    "test_time": "8:03:08"
  },
  {
    "computer_name": "A54-0082",
    "test_date": "2023-06-07",
    "ip_address": "192.168.1.51",
    "bandwidth_mbps": 5.66,
    "measure_tick": 530,
    "test_time": "8:20:09"
  },
  {
    "computer_name": "A54-0085",
    "test_date": "2019-06-27",
    "ip_address": "192.168.1.52",
    "bandwidth_mbps": 10.135,
    "measure_tick": 296,
    "test_time": "15:11:50"
  },
  {
    "computer_name": "A54-0089",
    "test_date": "2020-10-28",
    "ip_address": "192.168.1.80",
    "bandwidth_mbps": 6.0,
    "measure_tick": 500,
    "test_time": "8:32:28"
  }
]
```
