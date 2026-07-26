# `computer_mac`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| computer_mac_addr | varchar(20) | NO | PRI |  |  |  |
| computer_name | varchar(150) | YES | MUL | NULL |  |  |
| last_update | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_computer_name | computer_name | no | 1 |
| ix_computer_name_update | computer_name | no | 1 |
| ix_computer_name_update | last_update | no | 2 |
| PRIMARY | computer_mac_addr | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "computer_mac_addr": "74-27-EA-22-7A-D4",
    "computer_name": "A56-0114",
    "last_update": 1784827365
  },
  {
    "computer_mac_addr": "3C-D9-2B-6F-02-4C",
    "computer_name": "RC04-YUWA",
    "last_update": 1732524417
  },
  {
    "computer_mac_addr": "08-00-27-13-BF-35",
    "computer_name": "SERVER2001",
    "last_update": 1566550578
  },
  {
    "computer_mac_addr": "00-09-0F-AA-00-01",
    "computer_name": "ACER5750G",
    "last_update": 1639479983
  },
  {
    "computer_mac_addr": "E8-D8-D1-CC-86-D5",
    "computer_name": "DESKTOP-06LF1J5",
    "last_update": 1644574375
  },
  {
    "computer_mac_addr": "3C-D9-2B-5D-B7-BD",
    "computer_name": "DMH-TELEMEDICIN",
    "last_update": 1722259120
  },
  {
    "computer_mac_addr": "E8-9C-25-31-71-B2",
    "computer_name": "S08000201-00053",
    "last_update": 1780419648
  },
  {
    "computer_mac_addr": "E8-D8-D1-CD-41-76",
    "computer_name": "A63-0046",
    "last_update": 1724743367
  }
]
```
