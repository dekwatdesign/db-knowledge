# `tb_emr_opd_progress_note`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(15) | NO | PRI |  |  |  |
| loginname | varchar(50) | NO | PRI |  |  |  |
| opd_progress_note_datetime | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| opd_progress_note_user | varchar(200) | YES |  | NULL |  |  |
| opd_progress_note_text | text | YES |  | NULL |  |  |
| opd_progress_note_delete_user | varchar(50) | YES |  | NULL |  |  |
| opd_progress_note_delete_datetime | datetime | YES |  | NULL |  |  |
| opd_progress_note_status | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | vn | yes | 1 |
| PRIMARY | loginname | yes | 2 |
| PRIMARY | opd_progress_note_datetime | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "620529082556",
    "loginname": "yuwa008",
    "opd_progress_note_datetime": "2019-05-29 10:28:28",
    "hn": "550001239",
    "opd_progress_note_user": "[MASKED_FULLNAME]",
    "opd_progress_note_text": "29 พ.ค. 2562 10:18 น. :อายุ10ปี&nbsp; ป.5 รร.อุ่นอารีวิทยา<br />ยังมีลืมการบ้าน แม่ยังต้องคอยถามว่ามีหรือไม่ แต่ก็รู้หน้าที่ว่ามีการบ้านก็จะทำเอง<br />ช่วงปิดเทอมอยู่บ้านเยอะเยอะ อยู่กับลูกพี่ลูกน้อง จะโดนดุเยอะ ก็เป็นน้ำหูน้ำตา<br />ขอสารภาพว่าลืมกินยา ตอนนี้รู้แล้วว่าลืม ไม่อยากกินยาแล้ว<br />ชอบดูyoutube รีวิวหนัง<br /><br />MSE ยังมีพูดไปเรื่อย พูดแทรก ใช้คำแบบในยูทูป พูดไม่ตรงประเด็น<br />slightly fidget&nbsp;",
    "opd_progress_note_delete_user": "",
    "opd_progress_note_delete_datetime": null,
    "opd_progress_note_status": "N"
  },
  {
    "vn": "620529082556",
    "loginname": "yuwa008",
    "opd_progress_note_datetime": "2019-05-29 10:35:24",
    "hn": "550001239",
    "opd_progress_note_user": "[MASKED_FULLNAME]",
    "opd_progress_note_text": "29 พ.ค. 2562 10:18 น. :อายุ10ปี&nbsp; ป.5 รร.อุ่นอารีวิทยา<br />ยังมีลืมการบ้าน แม่ยังต้องคอยถามว่ามีหรือไม่ แต่ก็รู้หน้าที่ว่ามีการบ้านก็จะทำเอง<br />ช่วงปิดเทอมอยู่บ้านเยอะเยอะ อยู่กับลูกพี่ลูกน้อง จะโดนดุเยอะ ก็เป็นน้ำหูน้ำตา<br />ขอสารภาพว่าลืมกินยา ตอนนี้รู้แล้วว่าลืม ไม่อยากกินยาแล้ว<br />ชอบดูyoutube รีวิวหนัง<br />รออะไรได้น้อย<br /><br />MSE ยังมีพูดไปเรื่อย พูดแทรก ใช้คำแบบในยูทูป พูดไม่ตรงประเด็น<br />slightly fidget&nbsp;<br />29 พ.ค. 2562 10:31 น. :<br />ดูกังวลเวลาแม่พูดถึงเรื่องพฤติกรรมที่ไม่ดีของตนเอง น้ำตาคลอ&nbsp;<br />ว่าแม่ว่าแม่เนรคุณที่เอาเรื่องตนเองมาเล่า",
    "opd_progress_note_delete_user": "",
    "opd_progress_note_delete_datetime": null,
    "opd_progress_note_status": "Y"
  },
  {
    "vn": "620529083018",
    "loginname": "yuwa008",
    "opd_progress_note_datetime": "2019-05-29 09:33:13",
    "hn": "570000409",
    "opd_progress_note_user": "[MASKED_FULLNAME]",
    "opd_progress_note_text": "29 พ.ค. 2562 09:32 น. :อยู่ป.4 วัดด่านสำโรง ห้องเด็กพิเศษ พอเรียนรู้ได้ ครูกำลังฝึกสะกดคำ พ่อรู้สึกว่าช่วงนี้รู้เรื่องมากขึ้น ความจำดีขึ้น",
    "opd_progress_note_delete_user": "",
    "opd_progress_note_delete_datetime": null,
    "opd_progress_note_status": "N"
  },
  {
    "vn": "620529083018",
    "loginname": "yuwa008",
    "opd_progress_note_datetime": "2019-05-29 09:33:36",
    "hn": "570000409",
    "opd_progress_note_user": "[MASKED_FULLNAME]",
    "opd_progress_note_text": "29 พ.ค. 2562 09:32 น. :อยู่ป.4 วัดด่านสำโรง ห้องเด็กพิเศษ พอเรียนรู้ได้ ครูกำลังฝึกสะกดคำ พ่อรู้สึกว่าช่วงนี้รู้เรื่องมากขึ้น ความจำดีขึ้น การช่วยเหลือตนเองทำได้มากขึ้น วางแผนไปฉะเชิงเทราปัญญานุกูลหลังจบ ป.6",
    "opd_progress_note_delete_user": "",
    "opd_progress_note_delete_datetime": null,
    "opd_progress_note_status": "Y"
  },
  {
    "vn": "620529083020",
    "loginname": "yuwa008",
    "opd_progress_note_datetime": "2019-05-29 09:45:09",
    "hn": "530022354",
    "opd_progress_note_user": "[MASKED_FULLNAME]",
    "opd_progress_note_text": "29 พ.ค. 2562 09:35 น. :ป.4 รร.ประชาธร อ่านหนังสือคล่อง โต้ตอบได้ดีตรงประเด็น&nbsp; Concerta18&nbsp;<br />school report ครูบอกมีเพื่อนสนิทไม่กี่คน ร่วมมือดี พูดเพราะ มีปัญหาเรื่องยุกยิก ขี้ลืม&nbsp; วอกแวกง่าย<br />สอบ NT ครูพบว่ามีปัญหาเรื่องคิดวิเคราะห์ แต่แม่เอามาถามใหม่ตอบได้แต่ป็นลักษณะตอบเร็ว ใจร้อนมากกว่า<br />มีปัยหาเรื่องคำที่ไม่ตรงไปตรงมา คำที่ต้องตีความ เช่น เปลี่ยว",
    "opd_progress_note_delete_user": "",
    "opd_progress_note_delete_datetime": null,
    "opd_progress_note_status": "Y"
  },
  {
    "vn": "620529083106",
    "loginname": "yuwa008",
    "opd_progress_note_datetime": "2019-05-29 09:57:44",
    "hn": "590001460",
    "opd_progress_note_user": "[MASKED_FULLNAME]",
    "opd_progress_note_text": "29 พ.ค. 2562 09:50 น. :ป.2 วัดแพรกษา ยังไม่มีปัญหาอะไรกับเพื่อน<br />เรียนพอได้ เกรด2กว่า<br />ที่บ้านไม่มีปัญหาเรื่องอารมณ์รุนแรง หรือเอาแต่ใจมากๆแล้ว<br />ทดสอบในห้องตรวจ ยังอ่านสะกดไม่คล่อง<br />MSE นั่งนิ่ง ไม่มีใจร้อน หุนหันพลันแล่น ถามตอบตรงคำถาม แต่คิดนานเวลาอ่านไม่ได้",
    "opd_progress_note_delete_user": "",
    "opd_progress_note_delete_datetime": null,
    "opd_progress_note_status": "N"
  },
  {
    "vn": "620529083106",
    "loginname": "yuwa008",
    "opd_progress_note_datetime": "2019-05-30 10:10:13",
    "hn": "590001460",
    "opd_progress_note_user": "[MASKED_FULLNAME]",
    "opd_progress_note_text": "29 พ.ค. 2562 09:50 น. :ป.2 วัดแพรกษา ยังไม่มีปัญหาอะไรกับเพื่อน<br />เรียนพอได้ เกรด2กว่า<br />ที่บ้านไม่มีปัญหาเรื่องอารมณ์รุนแรง หรือเอาแต่ใจมากๆแล้ว<br />ทดสอบในห้องตรวจ ยังอ่านสะกดไม่คล่อง<br />MSE นั่งนิ่ง ไม่มีใจร้อน หุนหันพลันแล่น ถามตอบตรงคำถาม แต่คิดนานเวลาอ่านไม่ได้<br />30 พ.ค. 2562 10:00 น. :13ปี2เดือน อยู่ชั้นม.1 ที่รร.วัดราษฎร์บูรณะ ตอนแรกสอบติดอีกที่แต่เพื่อนที่เกเรย้ายไปอยู่ที่นั่นกันเลยตัดสินใจอยู่โรงเรียนเดิม<br />มีความรับผิดชอบในการเรียนและการทำงานส่งดี ถ้าทำไม่ทันจะไปขอลอกเพื่อน&nbsp;<br />อยู่บ้านไม่มีหน้าที่รับผิดชอบอะไร แม่พยายามให้พาหมาไปเดินเล่นบ้างเพื่อจะได้ห่างเกม&nbsp;<br />ผป.บอกงานเยอะ พยายามแบ่งเวลาอยู่ แต่ก็แบ่งเวลาเล่นเกมด้วย<br /><br />MSE co-operated, good conscious, mild fidget ถามตอบตรงคำถามแต่ยังดูมีลักษณะimmature<br />&nbsp;",
    "opd_progress_note_delete_user": "",
    "opd_progress_note_delete_datetime": null,
    "opd_progress_note_status": "Y"
  },
  {
    "vn": "620529083108",
    "loginname": "yuwa008",
    "opd_progress_note_datetime": "2019-05-29 11:11:34",
    "hn": "610000105",
    "opd_progress_note_user": "[MASKED_FULLNAME]",
    "opd_progress_note_text": "29 พ.ค. 2562 11:08 น. :หลังได้ยา Fulox ปฏิสัมพันธ์กับน้องดีขึ้น&nbsp; พูดบอกความต้องการมากขึ้น แต่งอแงเอาแต่ใจ พ่นน้ำลาย เล่นน้ำลายดึงออกมาจากปาก<br />ร้องไห้นานเป็นชม. มีพฤติกรรมไม่เหมาะสมกลับมาเช่น เบ่งฉี่ บ้วนน้ำลาย<br />สื่อสารบอกความต้องการของตนเองได้มากขึ้นแต่ยังเป็นประโยคสั้น<br /><br />MSE ร้องไห้ พูด &quot;กลับบ้านๆ&quot; พยายามดึงน้ำลายออกมาจากปากของตัวเอง แม่เอาผ้าให้เช็ดเอง<br />นั่งบนเก้าอี้คุยกับแพทย์ได้ไม่ถึง1นาที ร้องไห้ แต่พอเรียกก็เดินกลับมานั่งที่ได้อีก<br />มองหน้าสบตาดีขึ้น ร้องไห้งอแงจะกลับตลอดการตรวจ",
    "opd_progress_note_delete_user": "",
    "opd_progress_note_delete_datetime": null,
    "opd_progress_note_status": "Y"
  }
]
```
