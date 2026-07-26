# `opdscreen_cc_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opdscreen_cc_history_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| entry_cc_data | text | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| bw | double(15,3) | YES |  | NULL |  |  |
| waist | double(15,3) | YES |  | NULL |  |  |
| temperature | double(15,3) | YES |  | NULL |  |  |
| hr | int(11) | YES |  | NULL |  |  |
| rr | int(11) | YES |  | NULL |  |  |
| bps | int(11) | YES |  | NULL |  |  |
| bpd | int(11) | YES |  | NULL |  |  |
| height | double(15,3) | YES |  | NULL |  |  |
| fbs | double(15,3) | YES |  | NULL |  |  |
| dtx1 | double(15,3) | YES |  | NULL |  |  |
| dtx2 | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | opdscreen_cc_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opdscreen_cc_history_id": 1,
    "vn": "550220103052",
    "entry_datetime": "2012-02-20 11:53:23",
    "entry_cc_data": "มาพบแพทย์ตามนัดDX. ADHD\r\n",
    "staff": "[MASKED_FULLNAME]",
    "bw": 46.0,
    "waist": 0.0,
    "temperature": 36.0,
    "hr": 72,
    "rr": 24,
    "bps": 109,
    "bpd": 70,
    "height": 149.0,
    "fbs": 0.0,
    "dtx1": 0.0,
    "dtx2": 0.0,
    "hos_guid": null
  },
  {
    "opdscreen_cc_history_id": 2,
    "vn": "550220103058",
    "entry_datetime": "2012-02-20 12:11:33",
    "entry_cc_data": "มาพบแพทย์ตามนัดDx. ADHD\r\n",
    "staff": "[MASKED_FULLNAME]",
    "bw": 24.0,
    "waist": 0.0,
    "temperature": 37.0,
    "hr": 100,
    "rr": 22,
    "bps": 108,
    "bpd": 83,
    "height": 137.0,
    "fbs": 0.0,
    "dtx1": 0.0,
    "dtx2": 0.0,
    "hos_guid": null
  },
  {
    "opdscreen_cc_history_id": 3,
    "vn": "550220103033",
    "entry_datetime": "2012-02-20 12:12:01",
    "entry_cc_data": "พบแพทย์ตามนัด, IMP Autism\r\n",
    "staff": "[MASKED_FULLNAME]",
    "bw": 65.0,
    "waist": 0.0,
    "temperature": 36.0,
    "hr": 80,
    "rr": 20,
    "bps": 124,
    "bpd": 72,
    "height": 168.0,
    "fbs": 0.0,
    "dtx1": 0.0,
    "dtx2": 0.0,
    "hos_guid": null
  },
  {
    "opdscreen_cc_history_id": 4,
    "vn": "550220103038",
    "entry_datetime": "2012-02-20 12:13:41",
    "entry_cc_data": "มาพบแพทย์ตามนัด DX. Mild MR\r\n",
    "staff": "[MASKED_FULLNAME]",
    "bw": 19.0,
    "waist": 0.0,
    "temperature": 37.1,
    "hr": 110,
    "rr": 22,
    "bps": 91,
    "bpd": 59,
    "height": 116.0,
    "fbs": 0.0,
    "dtx1": 0.0,
    "dtx2": 0.0,
    "hos_guid": null
  },
  {
    "opdscreen_cc_history_id": 5,
    "vn": "550220103039",
    "entry_datetime": "2012-02-20 12:17:52",
    "entry_cc_data": "มาพบแพทย์ตามนัด DX. AUTISM ไม่ร่ววมมือในการวัด V/S\r\n",
    "staff": "[MASKED_FULLNAME]",
    "bw": 93.0,
    "waist": 0.0,
    "temperature": 36.7,
    "hr": 0,
    "rr": 0,
    "bps": 0,
    "bpd": 0,
    "height": 150.0,
    "fbs": 0.0,
    "dtx1": 0.0,
    "dtx2": 0.0,
    "hos_guid": null
  },
  {
    "opdscreen_cc_history_id": 6,
    "vn": "550220103031",
    "entry_datetime": "2012-02-20 12:16:06",
    "entry_cc_data": "พบแพทย์ตามนัด, IMP Autism\r\n",
    "staff": "[MASKED_FULLNAME]",
    "bw": 16.0,
    "waist": 0.0,
    "temperature": 37.0,
    "hr": 82,
    "rr": 24,
    "bps": 90,
    "bpd": 62,
    "height": 102.0,
    "fbs": 0.0,
    "dtx1": 0.0,
    "dtx2": 0.0,
    "hos_guid": null
  },
  {
    "opdscreen_cc_history_id": 7,
    "vn": "550220103010",
    "entry_datetime": "2012-02-20 12:20:58",
    "entry_cc_data": "มาพบแพทย์ตามนัด DX. AUTISM\r\n",
    "staff": "[MASKED_FULLNAME]",
    "bw": 65.0,
    "waist": 0.0,
    "temperature": 36.0,
    "hr": 71,
    "rr": 20,
    "bps": 130,
    "bpd": 89,
    "height": 168.0,
    "fbs": 0.0,
    "dtx1": 0.0,
    "dtx2": 0.0,
    "hos_guid": null
  },
  {
    "opdscreen_cc_history_id": 8,
    "vn": "550220103048",
    "entry_datetime": "2012-02-20 12:30:56",
    "entry_cc_data": "มาพบแพทย์ตามนัด DxAutism  ไม่ร่วมมือในการวัด V/S\r\n",
    "staff": "[MASKED_FULLNAME]",
    "bw": 27.0,
    "waist": 0.0,
    "temperature": 36.0,
    "hr": 0,
    "rr": 0,
    "bps": 0,
    "bpd": 0,
    "height": 121.0,
    "fbs": 0.0,
    "dtx1": 0.0,
    "dtx2": 0.0,
    "hos_guid": null
  }
]
```
